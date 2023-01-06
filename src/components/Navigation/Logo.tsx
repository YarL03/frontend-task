import { FC } from 'react'
import { Link } from 'react-router-dom'
const Logo: FC = () => {

    return (
        <Link to="/">
            <img
                style={{height: 50}}
                src="../../../mock/logo.jpg"
                alt="NetUP"
            />
        </Link>
    )
}

export default Logo