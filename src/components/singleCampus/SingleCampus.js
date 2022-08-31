import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCampus } from "../../store/campusStores/singleCampusStore";
import Campus from "./Campus";

function SingleCampus() {
  const campus = useSelector((state) => state.singleCampus);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getCampus(params.id));
  }, []);

  return <Campus campus={campus} />;
}

export default SingleCampus;
