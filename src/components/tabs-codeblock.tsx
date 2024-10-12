import { Code } from "@geist-ui/core";

const code = `function MyComponent(props) {
  return (
    <div>
      <h1>Hello, {props.name}!</h1>
      <p>This is an example React component.</p>
    </div>
  );
}`;

const TabsCodeBlock = () => {
  return (
    <Code block aria-label="Hello world" name="/components/ui/tabs.tsx">
      {code}
    </Code>
  );
};

export default TabsCodeBlock;
