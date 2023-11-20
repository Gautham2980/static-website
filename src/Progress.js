
function Progress(){
  
    return(
        <div>
            
        <section id="skill-section">
            <div className="skill-container">
                <div className="skill-row">
                    <div className="skill-col">
                        <div className="skill-img">
                            <img src="images/skills.png" alt="" />
                        </div>

                    </div>

                    <div className="skill-col1">
                        <h2 className="skill-head">Voluptatem dignissimos provident quasi corporis voluptates</h2>
                        <p className="skill-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <div className="skill-bar">
                            <div className="pad">

                               <span className="html">HTML</span>
                               <div className="progress">
                               <div className="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                              </div>
                               
                            </div>

                            <div className="pad"><span>CSS</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style="width: 90%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                            </div>

                            <div className="pad"><span>JAVASCRIPT</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                            </div>

                            <div className="pad"><span>PHOTOSHOP</span>
                                <div className="progress">
                                    <div className="progress-bar" role="progressbar" style="width: 60%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                  </div>
                            </div>
                              
                        </div>
                    </div>

                </div>

            </div>

        </section>
        </div>
    )
}

export default Progress