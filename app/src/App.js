import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Courses from './Components/Courses';
import Loading from './Components/Loading';

function App() {

  const [courses, setCourses] = useState([])
  const [loading, setLoading] = useState(true)

  const refreshCourses = () => {
    fetchCourses()
  }

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id !== id);
    setCourses(afterDeletedCourses)
  }

  const fetchCourses = async () => {
    setLoading(true);
    try{
      const response = await axios.get('http://localhost:3000/courses');
      setCourses(response.data);
      setLoading(false);
    }
    catch(error){
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchCourses();  
  },[])

  return (
    <div className="App">
      {loading ? (
        <Loading/>
      ):(
        <>
          {courses.length === 0 ? (
            <div className='refreshDiv'>
              <h2> You're remove the all courses!</h2>
              <button className='button-delete' onClick={refreshCourses}> Refresh Courses Page</button>
            </div>
          ): (
            <Courses courses={courses} removeCourse={deleteCourse}/>
          )}
        </>
      )}
    </div>
  );
}

export default App;
