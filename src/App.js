  import logo from './logo.svg';
  import './App.css';
  import Head from './Componement/Layout/Head';
  import MenuLeft from './Componement/Layout/MenuLeft';
  import Footer from './Componement/Layout/Footer';
  import MenuAccount from './Componement/Layout/MenuAccount';
  import { useLocation } from 'react-router-dom';

  function App(props) {
    let params1=useLocation();
    return (
      <>
        <Head />
        <section >
          <div className="container">
            <div className="row">
                 {params1['pathname'].includes("Account")? <MenuAccount/>:<MenuLeft/>}
                {props.children}
              </div>
            </div>
 

        </section >
        <Footer />
      </>

    );
  }

  export default App;
