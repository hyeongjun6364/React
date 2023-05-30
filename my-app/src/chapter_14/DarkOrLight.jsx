import { useState, useCallback } from "react";
import ThemeContext from "./ThemeContext";
import MainContent from "./MainContent";

function DarkOrLight(props) {
    //Maincontent 컴포넌트를 자식으로 갖고있음
    const [theme, setTheme] = useState("light");
//callback 함수를 쓰는 이유? cpu메모리 줄이려고 -> 최적화
    // callback 함수의 의존성 배열에 값이 변경되는 것을 넣는다
    const toggleTheme = useCallback(() => {
        if (theme == "light") {
            setTheme("dark");
        } else if (theme == "dark") {
            setTheme("light");
        }
    }, [theme]);
//themeContext.provider로 묶어서 안에있는 컴포넌트들이 Themecontext값을 사용 할 수 있게됨.
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <MainContent />
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;


