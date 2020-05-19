import { PropTypes } from "react";
import { connect } from "react-redux";
import { sortFunction, findById, sortColors } from "../lib/array-helpers";
import ColorList from "./ColorList/ColorList";
import AddColorForm from "./AddColorForm/AddColorForm";
import { addColor } from "../redux/color-reducer";
import { removeColor, rateColor } from "../redux/rate-reducer";
import SortMenu from "./SortMenu/SortMenu";
import ColorDetails from "./ColorList/Color/ColorDetails";

export const Colors = connect(
  ({ colors }, { match }) => ({
    colors: sortColors(colors, match.params.sort)
  }),
  dispatch => ({
    onRemove(id) {
      dispatch(removeColor(id));
    },
    onRate(id, rating) {
      dispatch(rateColor(id, rating));
    }
  })
)(ColorList);

export const NewColor = connect(null, dispatch => ({
  onNewColor(title, color) {
    dispatch(addColor(title, color));
  }
}))(AddColorForm);

export const ColorDetailsContainer = connect(
  ({ colors }, { match }) => findById(colors, match.params.id)
)(ColorDetails)