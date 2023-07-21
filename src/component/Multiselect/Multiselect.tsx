import React from 'react'
import Select, {MultiValue} from 'react-select'
import './index.css';
import {ClearIndicatorStyles} from "../../constant/constants";
import ClearIndicator from "./ClearIndicator/ClearIndicator";
import {RecipesPropsType} from "../../store/store.types";
import {useFilterStore} from "../../store/store";
import {ColourOption} from "./multiselect.types";

const Multiselect: React.FC<{recipes: RecipesPropsType[]}> = ({recipes}) => {
const {setFilter} = useFilterStore()
  const optionRecipes = recipes?.map((item: any)=> ({
    label: item.name, value: item.name
  }))

  const handleChange = (e: MultiValue<ColourOption>) => {
  const res = e.map((item)=>item.value)
    setFilter(res)
  }

  return (
    <div className='container-multi'>
      <Select
        onChange={(e)=>handleChange(e)}
        components={{ ClearIndicator }}
        styles={{ clearIndicator: ClearIndicatorStyles }}
        isMulti
        options={optionRecipes}
      />
    </div>
  );
};

export default Multiselect;