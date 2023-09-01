import Card from "./assets/card/card";
import Layout from "./assets/layout/layout";
import "./index.css";

function App() {
  return (
    <>
      <Layout>
        <Card
          name="This project"
          imgURL="../assets/projImg1"
          description='This "beautiful" project here'
          link=""
        ></Card>
        <Card></Card>
        <Card></Card>
      </Layout>
    </>
  );
}

export default App;
