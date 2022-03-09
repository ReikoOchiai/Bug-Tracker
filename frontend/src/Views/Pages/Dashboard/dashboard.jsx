import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../../../Controllers/Redux/bugSlice";
import Card from "../../Components/Dashboard/card";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const dispatch = useDispatch();
  const bugs = useSelector((state) => state.bugs);

  useEffect(() => {
    dispatch(getBugs);
  }, [bugs == undefined]);
  return (
    <div className="page-container">
      <Card priority="1" count="10"></Card>;
      <Card priority="2" count="10"></Card>;
      <Card priority="3" count="10"></Card>;
    </div>
  );
};
