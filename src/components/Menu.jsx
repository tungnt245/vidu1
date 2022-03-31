import React from 'react';
import './menu.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Logobit from '../image/Logobit.png';
import { Link } from 'react-router-dom';
import Icon from '../heplper/icon';
import { Home } from '../heplper/icon';


function Menu() {
	return (
		<div className="home-container">
			<div className="menu">
				<div className="menu-top">
					<img className="img-logo" src={Logobit} />
				</div>
				<div className="menu-lists">
					<Link to="/" className="menu-list">
						<div className="menu-item-active">
							<div className="menu-item-icon">
								<Home />
							</div>
							<div className="menu-item-title">
								<span className="span-home">Home</span>
							</div>
						</div>
					</Link>
					<Link to="/" className="menu-list">
						<div className="menu-item-active2">
							<div className="menu-item-icon">
								<img className="img-home" src={Icon.search} />
							</div>
							<div className="menu-item-title2">
								<span className="span-home2">Tìm kiếm</span>
							</div>
						</div>
					</Link>
					<Link to="/" className="menu-list">
						<div className="menu-item-active3">
							<div className="menu-item-icon">
								<img className="img-home" src={Icon.feed} />
							</div>
							<div className="menu-item-title3">
								<span className="span-home3">Danh mục</span>
							</div>
						</div>
					</Link>
					<Link to="/" className="menu-list">
						<div className="menu-item-active3">
							<div className="menu-item-icon">
								<img className="img-home" src={Icon.profile} />
							</div>
							<div className="menu-item-title3">
								<span className="span-home3">Cá nhân</span>
							</div>
						</div>
					</Link>
					<div className="menu-img">
						<img src={Icon.layer} />
					</div>
				</div>
			</div>
			<div className="home">
				<div className="menu-content">
					<div className="menu-content-title">
						<button className="tatca">Tất cả</button>
					</div>
					<div className="menu-content-title">
						<button className="thuvien">Thư viện</button>
					</div>
					<div className="menu-content-title">
						<button className="quatang">Quà tặng</button>
					</div>
				</div>
				<div className="search-input">
					<div className="search-icon">
						<img className="img-icon" src={Icon.frame} />
					</div>
					<input
						className="inputsearch"
						type="text"
						placeholder="Tìm kiếm sách"
					/>
				</div>
				<div className="progress-information">
					<div className="banner">
						<img className="imgrec" src={Icon.rec} />
					</div>
					<div className="detail">
						<div className="recently">Đang xem gần đây</div>
						<div className="titles">
							Barack Obama và sự nghiệp The Audacie of the Legend
							off all the time
						</div>
						<div className="author">Barack Obama</div>
						<div className="progress-current">
							<div className="progress-percent">29%</div>

						</div>
						<div className="continue-reading">
							<button className="continue-reading-btn">
								Tiếp tục đọc
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Menu;
