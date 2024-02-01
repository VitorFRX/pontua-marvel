import { useEffect, useContext } from "react";
import { VariaveisContext } from "../../context/VariaveisContext";

export const LarguraTela = () => {
  const { setLarguraTela } = useContext(VariaveisContext);

  useEffect(() => {
    const handleResize = () => {
      setLarguraTela(window.innerWidth);
    };
    
    window.addEventListener("resize", handleResize);
    
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
};