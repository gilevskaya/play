const { parse, compile, derive } = require("./sindex");

let test_grammar = ({ fix, alt, seq, lit, _eps, tag }) =>
  fix(A =>
    alt(tag("PARENS", seq(seq(lit("("), A), lit(")"))), tag("A", lit("a")))
  );

console.log(
  JSON.stringify(
    parse(
      test_grammar,
      compile(derive(test_grammar)),
      "((((a))))"
    )({
      PARENS: (...args) => ["PARENS", ...args],
      A: (...args) => ["A", ...args]
    }),
    null,
    2
  )
);
