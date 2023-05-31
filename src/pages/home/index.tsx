import { Button } from 'antd';
import logo from './images/logo.svg';
import { filesystem } from '@neutralinojs/lib';
import './style/index.less';

function Home() {

	const hello = async () => {
		try {
			console.log('sss');
			const data = await filesystem.readDirectory('C:\\Project\\web-study\\neu-react2')
			console.log(data);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<Button onClick={hello}>
					你好
				</Button>
			</header>
		</div>
	);
}

export default Home;
