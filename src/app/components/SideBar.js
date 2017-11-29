import React from "react";

export const SideBar = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-xs-12">
                    <h1>Side Bar</h1>
                </div>
            </div>
            <div className="container">
                <h1>Hello World!</h1>
                <div className="row">
                    <div className="form-group">
                        <div className="form-group">
                            <input type="number" value={props.state.amount} onChange={ (e)=> props.handleAmountChange(e.target.value)}/>
                        </div>
                         islamic 
                        <br/>
                        <input className="toggle-input" checked={props.state.islamic} type="checkbox" onChange={ (e)=> props.handleIslamicChange(e.target.checked)}/>
                        <div className="form-group">
                        <br/>
                            <select defaultValue={props.state.tenure} onChange={ (e)=> props.handleTenureChange(e.target.value)}>
                                <option  value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <br/>
                        <div className="form-group">
                                <button className="btn btn-primary" onClick={()=> props.changeUsername('Anna')}>Calculate
                            </button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    );
};