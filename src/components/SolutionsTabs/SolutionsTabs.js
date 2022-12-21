import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css';

import styles from './SolutionsTabs.module.scss';

const SolutionsTabs = ({ solutions }) => {
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    hljs.highlightAll();
  }, [tabIndex]);

  return (
    <Tabs className={styles.solutionsTabs} selectedIndex={tabIndex} onSelect={(i) => setTabIndex(i)}>
      <TabList>
        {solutions.javascriptSolution1 && <Tab>JS</Tab>}
        {solutions.pythonSolution1 && <Tab>Python</Tab>}
        {solutions.goSolution1 && <Tab>Go</Tab>}
        {solutions.javaSolution1 && <Tab>Java</Tab>}
        {solutions.kotlinSolution1 && <Tab>Kotlin</Tab>}
        {solutions.phpSolution1 && <Tab>PHP</Tab>}
        {solutions.cSharpSolution1 && <Tab>C#</Tab>}
        {solutions.swiftSolution1 && <Tab>Swift</Tab>}
        {solutions.rSolution1 && <Tab>R</Tab>}
        {solutions.rubySolution1 && <Tab>Ruby</Tab>}
        {solutions.cSolution1 && <Tab>C</Tab>}
        {solutions.cPlusPlusSolution1 && <Tab>C++</Tab>}
        {solutions.typescriptSolution1 && <Tab>TypeScript</Tab>}
        {solutions.scalaSolution1 && <Tab>Scala</Tab>}
        {solutions.sqlSolution1 && <Tab>SQL</Tab>}
        {solutions.dartSolution1 && <Tab>Dart</Tab>}
        {solutions.coffeescriptSolution1 && <Tab>CoffeeScript</Tab>}
        {solutions.elixirSolution1 && <Tab>Elixir</Tab>}
        {solutions.haskellSolution1 && <Tab>Haskell</Tab>}
        {solutions.objectiveCSolution1 && <Tab>Objective-C</Tab>}
        {solutions.rustSolution1 && <Tab>Rust</Tab>}
        {solutions.clojureSolution1 && <Tab>Clojure</Tab>}
        {solutions.crystalSolution1 && <Tab>Crystal</Tab>}
        {solutions.dSolution1 && <Tab>D</Tab>}
        {solutions.elmSolution1 && <Tab>Elm</Tab>}
        {solutions.erlangSolution1 && <Tab>Erlang</Tab>}
        {solutions.fortranSolution1 && <Tab>Fortran</Tab>}
        {solutions.groovySolution1 && <Tab>Groovy</Tab>}
        {solutions.juliaSolution1 && <Tab>Julia</Tab>}
        {solutions.luaSolution1 && <Tab>Lua</Tab>}
        {solutions.nimSolution1 && <Tab>Nim</Tab>}
        {solutions.ocamlSolution1 && <Tab>OCaml</Tab>}
        {solutions.perlSolution1 && <Tab>Perl</Tab>}
        {solutions.powershellSolution1 && <Tab>PowerShell</Tab>}
        {solutions.prologSolution1 && <Tab>Prolog</Tab>}
        {solutions.shellSolution1 && <Tab>Shell</Tab>}
      </TabList>

      {solutions.javascriptSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-javascript">{solutions.javascriptSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-javascript">{solutions.javascriptSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-javascript">{solutions.javascriptSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.pythonSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-python">{solutions.pythonSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-python">{solutions.pythonSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-python">{solutions.pythonSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.goSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-go">{solutions.goSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-go">{solutions.goSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-go">{solutions.goSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.javaSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-java">{solutions.javaSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-java">{solutions.javaSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-java">{solutions.javaSolution2}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.kotlinSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-kotlin">{solutions.kotlinSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-kotlin">{solutions.kotlinSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-kotlin">{solutions.kotlinSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.phpSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-php">{solutions.phpSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-php">{solutions.phpSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-php">{solutions.phpSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.cSharpSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-csharp">{solutions.cSharpSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-csharp">{solutions.cSharpSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-csharp">{solutions.cSharpSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.swiftSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-swift">{solutions.swiftSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-swift">{solutions.swiftSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-swift">{solutions.swiftSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.rSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-r">{solutions.rSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-r">{solutions.rSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-r">{solutions.rSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.rubySolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-ruby">{solutions.rubySolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-ruby">{solutions.rubySolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-ruby">{solutions.rubySolution2}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.cSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-c">{solutions.cSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-c">{solutions.cSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-c">{solutions.cSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.cPlusPlusSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-cpp">{solutions.cPlusPlusSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-cpp">{solutions.cPlusPlusSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-cpp">{solutions.cPlusPlusSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.typescriptSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-typescript">{solutions.typescriptSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-typescript">{solutions.typescriptSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-typescript">{solutions.typescriptSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.scalaSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-scala">{solutions.scalaSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-scala">{solutions.scalaSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-scala">{solutions.scalaSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.sqlSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-sql">{solutions.sqlSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-sql">{solutions.sqlSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-sql">{solutions.sqlSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.dartSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-dart">{solutions.dartSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-dart">{solutions.dartSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-dart">{solutions.dartSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.coffeescriptSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-coffeescript">{solutions.coffeescriptSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-coffeescript">{solutions.coffeescriptSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-coffeescript">{solutions.coffeescriptSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.elixirSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-elixir">{solutions.elixirSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-elixir">{solutions.elixirSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-elixir">{solutions.elixirSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.haskellSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-haskell">{solutions.haskellSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-haskell">{solutions.haskellSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-haskell">{solutions.haskellSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.objectiveCSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-objectivec">{solutions.objectiveCSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-objectivec">{solutions.objectiveCSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-objectivec">{solutions.objectiveCSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.rustSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-rust">{solutions.rustSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-rust">{solutions.rustSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-rust">{solutions.rustSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.clojureSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-clojure">{solutions.clojureSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-clojure">{solutions.clojureSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-clojure">{solutions.clojureSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.crystalSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-crystal">{solutions.crystalSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-crystal">{solutions.crystalSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-crystal">{solutions.crystalSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.dSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-d">{solutions.dSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-d">{solutions.dSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-d">{solutions.dSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.elmSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-elm">{solutions.elmSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-elm">{solutions.elmSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-elm">{solutions.elmSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.erlangSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-erlang">{solutions.erlangSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-erlang">{solutions.erlangSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-erlang">{solutions.erlangSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.fortranSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-fortran">{solutions.fortranSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-fortran">{solutions.fortranSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-fortran">{solutions.fortranSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.groovySolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-groovy">{solutions.groovySolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-groovy">{solutions.groovySolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-groovy">{solutions.groovySolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.juliaSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-julia">{solutions.juliaSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-julia">{solutions.juliaSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-julia">{solutions.juliaSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.luaSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-lua">{solutions.luaSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-lua">{solutions.luaSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-lua">{solutions.luaSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.nimSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-nim">{solutions.nimSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-nim">{solutions.nimSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-nim">{solutions.nimSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.ocamlSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-ocaml">{solutions.ocamlSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-ocaml">{solutions.ocamlSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-ocaml">{solutions.ocamlSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.perlSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-perl">{solutions.perlSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-perl">{solutions.perlSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-perl">{solutions.perlSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.powershellSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-powershell">{solutions.powershellSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-powershell">{solutions.powershellSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-powershell">{solutions.powershellSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.prologSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-prolog">{solutions.prologSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-prolog">{solutions.prologSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-prolog">{solutions.prologSolution3}</code>
          </pre>
        </TabPanel>
      )}
      {solutions.shellSolution1 && (
        <TabPanel>
          <p>Solution #1</p>
          <pre className={styles.myPre}>
            <code className="language-shell">{solutions.shellSolution1}</code>
          </pre>

          <p>Solution #2</p>
          <pre className={styles.myPre}>
            <code className="language-shell">{solutions.shellSolution2}</code>
          </pre>

          <p>Solution #3</p>
          <pre className={styles.myPre}>
            <code className="language-shell">{solutions.shellSolution3}</code>
          </pre>
        </TabPanel>
      )}
    </Tabs>
  );
};

export default SolutionsTabs;
