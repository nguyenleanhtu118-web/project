import React from 'react';

function ListComment(props) {

    return (
        <div className="response-area">
            <h2>{props.comment.length} RESPONSES</h2>
            <ul className="media-list">
                {props.comment.map((item, index) => {
                    if (item.id_comment != 0) {
                        return null;
                    }
                    return (
                        <React.Fragment key={index}>
                            <li className="media">
                                <a className="pull-left" href="#">
                                    <img
                                        className="media-object"
                                        src="images/blog/man-two.jpg"
                                        alt=""
                                    />
                                </a>
                                <div className="media-body">
                                    <ul className="sinlge-post-meta">
                                        <li>
                                            <i className="fa fa-user" />
                                            {item.name_user}
                                        </li>
                                        <li>
                                            <i className="fa fa-clock-o" />
                                            {item.created_at}
                                        </li>
                                    </ul>
                                    <p>
                                        {item.comment}
                                    </p>
                                    <a
                                        className="btn btn-primary"
                                        href="#replay"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            props.setIdRely(item.id);
                                            console.log("CLICK REPLY");
                                            console.log(document.getElementById("replay"));

                                            const replay = document.getElementById("replay");

                                            if (replay) {
                                                replay.scrollIntoView({
                                                    behavior: "smooth",
                                                    block: "start"
                                                });
                                            }
                                        }}
                                    >
                                        <i className="fa fa-reply" />
                                        Reply
                                    </a>

                                    {/* REPLY */}
                                    <ul className="media-list">
                                        {props.comment.map((reply, replyIndex) => {
                                            if (reply.id_comment == item.id) {
                                                return (
                                                    <li
                                                        className="media second-media"
                                                        key={replyIndex}
                                                    >
                                                        <a
                                                            className="pull-left"
                                                            href="#"
                                                        >
                                                            <img
                                                                className="media-object"
                                                                src="images/blog/man-three.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="media-body">
                                                            <ul className="sinlge-post-meta">
                                                                <li>
                                                                    <i className="fa fa-user" />
                                                                    {reply.name_user}
                                                                </li>
                                                                <li>
                                                                    <i className="fa fa-clock-o" />
                                                                    {reply.created_at}
                                                                </li>
                                                            </ul>
                                                            <p>
                                                                {reply.comment}
                                                            </p>

                                                        </div>

                                                    </li>
                                                );
                                            }
                                            return null;
                                        })}
                                    </ul>
                                </div>
                            </li>
                        </React.Fragment>
                    );
                })}
            </ul>
        </div>
    );
}
export default ListComment;