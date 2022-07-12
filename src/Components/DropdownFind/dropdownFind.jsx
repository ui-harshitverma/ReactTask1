import React from "react";
import '../custom.css/custom.css'
import './dropdownFind.css'
import Button from "../Button/button";
import FindData from "../Data/dropDownFindData";

const DropdownFind = () => {
    return (
        <>
            <div className="dropDownFind_container">
                <div className="max-width d-flex-drop">
                    <form action="/action_page.php">
                        {FindData.map((item) => {
                            return (
                                <> <div className="dropDown_item">
                                    <select name="cars" id="cars">
                                        <option value="volvo">{item.area}</option>
                                        <option value="saab">{item.area1}</option>
                                        <option value="opel">{item.area2}</option>
                                        <option value="audi">{item.area3}</option>
                                    </select>
                                </div>
                                </>
                            )
                        })}
                        <div className="dropDown_item text-center"><Button type="primary" content="Find Now" /></div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default DropdownFind;