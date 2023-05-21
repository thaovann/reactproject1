import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.scss';
// funtion App : funtion component
// const App () => { } arrow function


/* 
* 2 components: class component / function component (function, arrow)
*

*/
function App() {
  const handleNameChange = () => {
    const names = ['Bob', 'Kevin', 'Dave']
  }







  return (  // phía bên trong return  gọi là jxs
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
