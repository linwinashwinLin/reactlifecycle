import './App.css';
import Card from './Card';

function App() {
  return (
    <div className="App">
      <Card 
        imgPath="https://cdn.pixabay.com/photo/2021/06/15/16/11/man-6339003_1280.jpg" 
        userName="ashwin" 
        name="Ashwin" 
        bio="Developer" 
      />
      <Card 
        imgPath="https://cdn.pixabay.com/photo/2016/03/27/16/54/face-1283106_1280.jpg" 
        userName="rahul" 
        name="Rahul" 
        bio="Developer" 
      />
      <Card 
        imgPath="https://cdn.pixabay.com/photo/2016/11/22/21/42/woman-1850703_1280.jpg" 
        userName="pooja" 
        name="Pooja" 
        bio="Developer" 
      />
    </div>
  );
}

export default App;
