import { Component } from "react";
import Ingredients from "./IngredientsComponent";
import Steps from "./StepsComponent";
import style from "./styles.module.css";

export default class Recipe extends Component {
    render() {
        let {name, ingredients, steps} = this.props.recipeInfo;
        return <div>
            <h2 className={style.recipe}>{name}</h2>
            {
                ingredients.map((ing, index) => <Ingredients ingredientInfo={ing} key={'ing'+index} />)
            }
            <h1>Cooking Instructions</h1>
            {
                steps.map((step, index) => <Steps stepInfo={step} key={'step'+index} />)
            }
        </div>
    }
}