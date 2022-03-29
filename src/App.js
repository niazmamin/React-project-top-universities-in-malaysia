import Box from './components/Box';
import MyData from './components/MyData';


function loadme(val){
  return(
  <Box
  images={val.images}
  title={val.title}
  desc={val.desc}
  link={val.link}
/>
  );
}
function App() {
  return (
    <>
    <h2>Top Universities in Malaysia</h2>
    {MyData.map(loadme)}

    </>
  );
}

export default App;
