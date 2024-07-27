import Course from "./Course";

function Courses({courses, removeCourse}) {
    console.log(courses)
    return (
        <div>
            <div>
                <h2>My Courses</h2>
            </div>
            <div className="courses-map">
                {
                    courses.map((course,index)=> {
                        return (
                            <Course key={index} {...course} removeOneCourse={removeCourse} />
                            //<Course course={course}/>
                        )
                    })
                }
            </div>
        </div>
      );
}

export default Courses;