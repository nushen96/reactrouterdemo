import {Link, Route, Switch, useRouteMatch} from 'react-router-dom'
import Item from "./Item"

function Shop() {
    const {url,path} = useRouteMatch();
    return (
        <>
            <h1>Shop</h1>
            <ul>
                <li><Link to={`${url}/banana`}>banana</Link></li>
                <li><Link to={`${url}/apple`}>apple</Link></li>
                <li><Link to={`${url}/orange`}>orange</Link></li>
            </ul>
            <Switch>
                <Route path={path} exact>
                    <h2>Welcome to the shop</h2>
                </Route>
                <Route path={`${path}/:id`}>
                    <Item/>
                </Route>
            </Switch>
        </>
    )
}

export default Shop;