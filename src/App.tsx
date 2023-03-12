import Button from "./components/Button";

function App() {
	return (
		<>
			<Button type='success'>Button</Button>
			<Button type='danger'>Button</Button>
			<Button type='warning'>Button</Button>
			<Button>Button</Button>
			<Button size='large' type='success'>
				Button
			</Button>
			<Button size='large' type='danger'>
				Button
			</Button>
			<Button size='large' type='warning'>
				Button
			</Button>
			<Button size='large'>Button</Button>
		</>
	);
}

export default App;
