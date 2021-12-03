
import React, { useEffect} from 'react';

import TheHeader from '../containers/TheHeader';
import TheSidebar from '../containers/TheSidebar';
import TheFooter from '../containers/TheFooter';
import '../../../../node_modules/simple-line-icons/css/simple-line-icons.css';
// import card from '../images/card.jpeg';

// import Multiselect from 'multiselect-react-dropdown';



const UpdateAssessment = () => {
   
    
  useEffect(()=>{
    require('./../css/style.css');

    
    
  },[])
 
return(
      <div>
      <TheHeader />
       <div className="app-body"> 
                     <TheSidebar/>
                     <br /><br />
                     <div className="main">
                        <main className="main">
                        <br /><br />
                    <div className="col-lg-12">
                         <div className="card" style={{alignContent: "center"}}>
                            <div className="card-header">
                                  Update Assessments
                             </div>
                    <div className="card-body">
                    <form action method="post" className="form-horizontal">
                      <div className="form-group row">
                           <div className="col-4">
                            <input type="text" className="form-control" placeholder="title" style={{fontSize: "medium"}} />
                          </div>
                      </div>
                      <div className="form-group row">
                          <div className="col-4">
                               <input type="text" className="form-control" placeholder="status" style={{fontSize: "medium"}}/>
                          </div>
                      <div className="col-4">
                          <label className="switch switch-3d switch-primary" style={{bordercolor: "#1985ac",
    backgroundColor: "1985ac"}}>
                          <input type="checkbox" className="switch-input" checked="" style={{bordercolor: "#1985ac"}} />
                          <span className="switch-label"></span>
                          <span className="switch-handle"></span>
                         </label>
                      </div>
                  </div>
              </form>
          </div> 
      </div>
    </div>
    {/* table of  question */}
    <div class="card">
                <div class="card-header">
                  <i class="fa fa-align-justify"></i> Questions
                </div>
                <div class="card-body">
                  <table class="table table-bordered table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Questions</th>
                        <th>Action</th>
                        <th>IsActive</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Vishnu Serghei</td>
                        <td>2012/01/01</td>
                        <td>
                        <label className="switch switch-3d switch-primary">
                            <input type="checkbox" className="switch-input" checked="" />
                            <span className="switch-label"></span>
                            <span className="switch-handle"></span>
                         </label>
                        </td>
                       </tr>
                    </tbody>
                  </table>
                </div>
          </div>

          <div class="card">
                <div class="card-header">
                  <i class="fa fa-align-justify"></i> Questions
                </div>
                <div class="card-body">
                  <table class="table table-bordered table-striped table-sm">
                    <thead>
                      <tr>
                        <th>Option</th>
                        <th>Score</th>
                        <th>Action</th>
                        <th>IsActive</th>
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Vishnu Serghei</td>
                        <td>2012/01/01</td>
                        <td>Member</td>
                        <td>
                        <label className="switch switch-3d switch-primary">
                            <input type="checkbox" className="switch-input" checked="" />
                            <span className="switch-label"></span>
                            <span className="switch-handle"></span>
                      </label>
                        </td>
                       </tr>
                    </tbody>
                  </table>
                </div>
          </div>

      </main>
    </div>
      </div>
      <TheFooter/>
      </div>
      
           
      // </div>  
  );
}
export default UpdateAssessment;