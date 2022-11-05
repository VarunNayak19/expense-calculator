import { useState } from "react";
import { useDispatch } from "react-redux";
import { categories } from "../../constants/addExpense";
import { addExpense } from "../../redux/actions/expenses";
import "./form.css";
const Form = () => {
  const cat = categories;
  const [showCategory, setshowCategory] = useState(false);
  const [title, settitle] = useState("");
  const [amount, setamount] = useState("");
  const [category, setcategory] = useState();
  const [modalOpen, setmodalOpen] = useState(false);
  const dispatch = useDispatch;
  const handleTitle = (e) => {
    settitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setamount("");
      return;
    } else {
      setamount(val);
    }
  };
  const handleCategory = (category) => {
    setcategory(category);
    setshowCategory(false);
    console.log(category);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      alert("Please enter complete data");
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setmodalOpen(!modalOpen);
  };
  return (
    <form className="formContainer">
      <div className="formItem">
        <label>TITLE</label>
        <input
          placeholder="Expenditure"
          value={title}
          onChange={(e) => handleTitle(e)}
        />
      </div>
      <div className="formItem">
        <label>
          AMOUNT <i className="fa-solid fa-indian-rupee-sign"></i>
        </label>
        <input
          placeholder="Enter the amount"
          value={amount}
          pattern="[0-9]+"
          onChange={(e) => handleAmount(e)}
        />
      </div>
      <div className="dropdownItem">
        <div className="category">
          <div className="categoryDropdown">
            <label>{category ? category.title : "Category"}</label>
            <i
              className="fa-solid fa-caret-down"
              onClick={() => setshowCategory(!showCategory)}
            ></i>
          </div>
          {showCategory && (
            <div className="category-container">
              {cat.map((category) => {
                return (
                  <div
                    className="categoryItem"
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <img
                      src={category.icon}
                      alt={category.title}
                      className="categoryIcon"
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      <div className="addbuttonDiv" onClick={handleSubmit}>
        SUBMIT <i className="fa-solid fa-check"></i>
      </div>
    </form>
  );
};

export default Form;
