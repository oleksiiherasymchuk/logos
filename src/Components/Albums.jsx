import React, { useEffect } from "react";
import style from "./Components.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumsThunk } from "../redux/userReducer";

const Albums = () => {
  const albums = useSelector((store) => store.user.albums);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAlbumsThunk())
  }, [dispatch]);

  return <div className={style.child}>
    <h1>Albums</h1>
    {albums.map((album) => <p key={album.id}>{album.id}. {album.title}</p>)}
  </div>;
};

export default Albums;