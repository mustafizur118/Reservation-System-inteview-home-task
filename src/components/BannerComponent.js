import React from "react";
import { Link } from "react-router-dom";

export default function BannerComponent({ room }) {
  return (
    <>
      <div
        className="jumbotron bannertext-white text-center"
        style={{
          backgroundImage: `url("${room.cover_image}")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 100%",
        }}
      >
        <h1 className="display-4 font-weight-bold text-white">{room.title}</h1>
        
        <hr className="my-4" />
        
        {room.is_booked ? (
          <p className="lead btn btn-danger btn-lg">Reserved</p>
        ) : (
          <p className="lead">
            (
            <Link
              to={{
                pathname: `/book/${room.id}`,
                state: { room },
              }}
              className="btn btn-primary btn-lg"
              role="button"
            >
              Book Room
            </Link>
            )
          </p>
        )}
      </div>
    </>
  );
}
