import { Spin } from 'antd';
import './style/index.less';

const LoadingPage = ({ children }) => {
    return (
        <Spin spinning className='loading-page'>
            {children}
        </Spin>
    );
};

export default LoadingPage;