import './App.css';
import { List } from './components';
import { Listst } from './components';
import { Listmain } from './components';
import { ListLeft } from './components';
import { Item } from './components';
import { Itemst } from './components';
import { Itemmain } from './components';
import { ItemLeft } from './components';
import { ItemRight } from './components';
import agents from '../src/assets/images/agents.svg';
import articles from '../src/assets/images/articles.svg';
import Brat from '../src/assets/images/Brat.png';
import Contacts from '../src/assets/images/Contacts.svg';
import Ideas from '../src/assets/images/Ideas.svg';
import Logo from '../src/assets/images/Logo.svg';
import Overview from '../src/assets/images/Overview.svg';
import Plus from '../src/assets/images/Plus.png';
import LineBlou from '../src/assets/images/LineBlou.png';
import LineWhite from '../src/assets/images/LineWhite.png';
import Qongiroq from '../src/assets/images/Qo`ng`iroq.png';
import Search from '../src/assets/images/Search.png';
import Settings from '../src/assets/images/Settings.svg';
import Subscription from '../src/assets/images/Subscription.svg';
import Tickets from '../src/assets/images/Tickets.svg';
import Title from '../src/assets/images/Title.svg';

function App() {
	return (
		<div className='App'>
			<>
				<div className='sitebox'>
					<div className='sitebar'>
						<a className='sitebarlink' href='../public/index.html'>
							<img alt='logoimg' src={Logo} className='logo-img' />
							<p className='logo-text'>Dashboard Kit</p>
						</a>
						<div className='logo-box'>
							<List className='sitebar-list'>
								<Item className='sitebar-item' img={Overview} text='Overview' />
								<Item img={Tickets} text='Tickets' />
								<Item img={Ideas} text='Ideas' />
								<Item img={Contacts} text='Contacts' />
								<Item img={agents} text='Agents' />
								<Item img={articles} text='Articles' />
								<Item img={Settings} text='Settings' />
								<Item img={Subscription} text='Subscription' />
							</List>
						</div>
					</div>
					<div>
						<header className='site-header'>
							<a href='../public/index.html' className='header-logo-link'>
								<img
									alt='header logo-img'
									className='header-logo-img'
									src={Title}
								/>
							</a>

							<div className='header-icon-box'>
								<img
									alt='header-logo'
									src={Search}
									className='header-icon-img'
								/>
								<img
									alt='header-logo'
									src={Qongiroq}
									className='header-icon-img'
								/>
							</div>

							<div className='header-man-box'>
								<p className='header-man-name'>Jones Ferdinand</p>
								<img alt='brat' className='header-man-img' src={Brat} />
							</div>
						</header>

						<div className='statistika'>
							<Listst>
								<Itemst text='Unresolved' num='60' />
								<Itemst text='Overdue' num='16' />
								<Itemst text='Open' num='43' />
								<Itemst text='On_hold ' num='64' />
							</Listst>
						</div>

						<div className='main'>
							<div className='main-left'>
								<div className='main-header'>
									<div className='main-todey'>Todays trends</div>
									<div className='main-text-box'>
										<p className='main-data'>as of 25 May 2019, 09:41 PM</p>
										<p className='main-todey-text'>
											<img
												alt='line'
												className='main-big-line'
												src={LineBlou}
											/>
											Today
										</p>
										<p className='main-todey-text'>
											<img
												alt='line'
												className='main-big-line'
												src={LineWhite}
											/>
											Yesterday
										</p>
									</div>
								</div>
								{/* <img
									className='imgg'
									src='https://via.placeholder.com/780/520'
								/> */}
							</div>
							<div className='main-right'>
								<Listmain>
									<Itemmain text='Resolved' num='449' />
									<Itemmain text='Received' num='426' />
									<Itemmain text='Average first response time' num='33m' />
									<Itemmain text='Average response time' num='3h 8m' />
									<Itemmain text='Resolution within SLA' num='94%' />
								</Listmain>
							</div>
						</div>

						<div className='new-todo'>
							<div className='new-todo-left'>
								<div className='left-header'>
									<div className='header-left'>
										<h3 className='left-title'>Unresolved tickets</h3>
										<p className='left-text'>
											<span className='left-span'>Group:</span> Support
										</p>
									</div>
									<a href='../public/index.html' className='left-link'>
										View details
									</a>
								</div>
								<div className='lefy-List'>
									<ListLeft>
										<ItemLeft text='Waiting on Feature Request' num='4238' />
										<ItemLeft text='Awaiting Customer Response' num='1005' />
										<ItemLeft text='Awaiting Developer Fix' num='914 ' />
										<ItemLeft text='Pending' num='281' />
									</ListLeft>
								</div>
							</div>

							<div className='new-todo-left leftt'>
								<div className='left-header'>
									<div className='header-left'>
										<h3 className='left-title'>Tasks</h3>
										<p className='left-text'>
											<span className='left-span'>Today</span>
										</p>
									</div>
									<a href='../public/index.html' className='left-link'>
										View all
									</a>
								</div>
								<div className='crate'>
									<p className='crate-text'>Create new task</p>
									<img alt='Plus' src={Plus} />
								</div>
								<div className='lefy-List'>
									<ListLeft>
										<ItemRight text='Finish_ticket_update' all='Urgent' />
										<ItemRight text='Create_new_ticket_example' all='New' />
										<ItemRight text='Update_ticket_report' all='deufaultas' />
									</ListLeft>
								</div>
							</div>

							<div className='new-todo-right'></div>
						</div>
					</div>
				</div>
			</>
		</div>
	);
}

export default App;
