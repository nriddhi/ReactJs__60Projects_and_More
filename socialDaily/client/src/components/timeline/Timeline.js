import React, { useState } from "react";
import { Button, Modal } from 'antd';


export default function Timeline() {
   
    const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };


  return (
    <div className="col-lg-6">
      <div className="central-meta">
        <div className="new-postbox">
          <figure>
            <img src="images/resources/admin2.jpg" alt="" />
          </figure>
          <div className="newpst-input">
          
      <Modal title="Create Post" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <textarea rows="2" placeholder="write something"></textarea>
      </Modal>
            <form method="post">
              <textarea rows="2" placeholder="write something" onClick={showModal}></textarea>
             
            </form>
          </div>
        </div>
      </div>
      <div className="loadMore">
        <div className="central-meta item">
          <div className="user-post">
            <div className="friend-info">
              <figure>
                <img src="images/resources/friend-avatar10.jpg" alt="" />
              </figure>
              <div className="friend-name">
                <ins>
                  <a href="time-line.html" title="">
                    Janice Griffith
                  </a>
                </ins>
                <span>published: june,2 2018 19:PM</span>
              </div>
              <div className="post-meta">
                <img src="images/resources/user-post.jpg" alt="" />
                <div className="we-video-info">
                  <ul>
                    <li>
                      <span className="views" data-toggle="tooltip" title="views">
                        <i className="fa fa-eye"></i>
                        <ins>1.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="comment"
                        data-toggle="tooltip"
                        title="Comments"
                      >
                        <i className="fa fa-comments-o"></i>
                        <ins>52</ins>
                      </span>
                    </li>
                    <li>
                      <span className="like" data-toggle="tooltip" title="like">
                        <i className="ti-heart"></i>
                        <ins>2.2k</ins>
                      </span>
                    </li>
                    <li>
                      <span
                        className="dislike"
                        data-toggle="tooltip"
                        title="dislike"
                      >
                        <i className="ti-heart-broken"></i>
                        <ins>200</ins>
                      </span>
                    </li>
                    <li className="social-media">
                      <div className="menu">
                        <div className="btn trigger">
                          <i className="fa fa-share-alt"></i>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-html5"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-facebook"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-google-plus"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-twitter"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-css3"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-instagram"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-dribbble"></i>
                            </a>
                          </div>
                        </div>
                        <div className="rotater">
                          <div className="btn btn-icon">
                            <a href="#" title="">
                              <i className="fa fa-pinterest"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="description">
                  <p>
                    World's most beautiful car in Curabitur{" "}
                    <a href="#" title="">
                      #test drive booking !
                    </a>{" "}
                    the most beatuiful car available in america and the saudia
                    arabia, you can book your test drive by our official website
                  </p>
                </div>
              </div>
            </div>
            <div className="coment-area">
              <ul className="we-comet">
                <li>
                  <div className="comet-avatar">
                    <img src="images/resources/comet-1.jpg" alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Jason borne
                        </a>
                      </h5>
                      <span>1 year ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <i className="fa fa-reply"></i>
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this car is
                      very awesome for the youngster. please vote this car and
                      like our post
                    </p>
                  </div>
                  <ul>
                    <li>
                      <div className="comet-avatar">
                        <img src="images/resources/comet-2.jpg" alt="" />
                      </div>
                      <div className="we-comment">
                        <div className="coment-head">
                          <h5>
                            <a href="time-line.html" title="">
                              alexendra dadrio
                            </a>
                          </h5>
                          <span>1 month ago</span>
                          <a className="we-reply" href="#" title="Reply">
                            <i className="fa fa-reply"></i>
                          </a>
                        </div>
                        <p>
                          yes, really very awesome car i see the features of
                          this car in the official website of{" "}
                          <a href="#" title="">
                            #Mercedes-Benz
                          </a>{" "}
                          and really impressed :-)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="comet-avatar">
                        <img src="images/resources/comet-3.jpg" alt="" />
                      </div>
                      <div className="we-comment">
                        <div className="coment-head">
                          <h5>
                            <a href="time-line.html" title="">
                              Olivia
                            </a>
                          </h5>
                          <span>16 days ago</span>
                          <a className="we-reply" href="#" title="Reply">
                            <i className="fa fa-reply"></i>
                          </a>
                        </div>
                        <p>
                          i like lexus cars, lexus cars are most beautiful with
                          the awesome features, but this car is really
                          outstanding than lexus
                        </p>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="comet-avatar">
                    <img src="images/resources/comet-1.jpg" alt="" />
                  </div>
                  <div className="we-comment">
                    <div className="coment-head">
                      <h5>
                        <a href="time-line.html" title="">
                          Donald Trump
                        </a>
                      </h5>
                      <span>1 week ago</span>
                      <a className="we-reply" href="#" title="Reply">
                        <i className="fa fa-reply"></i>
                      </a>
                    </div>
                    <p>
                      we are working for the dance and sing songs. this video is
                      very awesome for the youngster. please vote this video and
                      like our channel
                      <i className="em em-smiley"></i>
                    </p>
                  </div>
                </li>
                <li>
                  <a href="#" title="" className="showmore underline">
                    more comments
                  </a>
                </li>
                <li className="post-comment">
                  <div className="comet-avatar">
                    <img src="images/resources/comet-1.jpg" alt="" />
                  </div>
                  <div className="post-comt-box">
                    <form method="post">
                      <textarea placeholder="Post your comment"></textarea>
                      <div className="add-smiles">
                        <span
                          className="em em-expressionless"
                          title="add icon"
                        ></span>
                      </div>
                      <div className="smiles-bunch">
                        <i className="em em---1"></i>
                        <i className="em em-smiley"></i>
                        <i className="em em-anguished"></i>
                        <i className="em em-laughing"></i>
                        <i className="em em-angry"></i>
                        <i className="em em-astonished"></i>
                        <i className="em em-blush"></i>
                        <i className="em em-disappointed"></i>
                        <i className="em em-worried"></i>
                        <i className="em em-kissing_heart"></i>
                        <i className="em em-rage"></i>
                        <i className="em em-stuck_out_tongue"></i>
                      </div>
                      <button type="submit"></button>
                    </form>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
