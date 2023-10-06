import React, {useContext} from 'react';
import {ThemeContext} from "./ThemeContext";

const Page = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const data = useContext(ThemeContext)
    console.log(data["isDark"])
    return (
        <div>
            {data["isDark"].map((v, idx) =>
            <h3 key={idx}>{v}</h3>)}
        </div>
    );
};

export default Page;