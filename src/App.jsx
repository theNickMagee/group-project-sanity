import './App.css';
import PersonCards from './PersonCards';
import AssignedWork from './AssignedWork';

function App() {
  return (
    <div className="App">
      <header className="header">
      <div className="header__text-box">
          <h1 className="heading-primary">
              <span className="heading-primary--main">Group Name</span>
              <span className="heading-primary--sub">className Number - Description</span>
          </h1>
      </div>
      </header>
      <div className="member-content">
            <h2 className="member-content__title">Group Members</h2>
            <div className="member-content__members">
                <PersonCards />
            </div>
        </div>
        
        <div className="assigned-work">
            <AssignedWork />
        </div>
    </div>
  );
}

export default App;
