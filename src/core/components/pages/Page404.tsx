import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '../../layouts/MainLayout';
import Alert from '../Alert';
import Text from '../Text';

const Page404 = () => {
    
    return (
        <>
            <div className='h-screen w-screen flex flex-col items-center justify-center'>
                <Link className='mt-5' to="/" >
                    <Alert className={['p-5']} >
                        <Text fontSize='lg' fontWeight='semibold' lineHeight='10'>
                            Page not found. <br />
                            click to go to homepage
                        </Text>
                    </Alert>
                </Link>
            </div>
        </>
    )
}

export default Page404