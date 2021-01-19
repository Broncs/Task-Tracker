import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h4>Version 1.0.0</h4>
      <p>
        Projeto do yt Brad Traversy , usei para reforçar minhas habilidades
        basicas com react , e reforcar Http requests usando json-server
      </p>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default About;
