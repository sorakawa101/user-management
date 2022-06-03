import { extendTheme } from '@chakra-ui/react';
import { FaGratipay } from 'react-icons/fa';

const theme = extendTheme({
    styles: {
        global: {
            body: {
                backgroundColor: "gray.100",
                color: "gray.800"
            }
        }
    }
})

export default theme;