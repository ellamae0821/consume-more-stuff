import React, {Component} from 'react';
import { Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { loadItems,editItem,deleteItem } from '../../actions/items';
import { loadConditions } from '../../actions/conditions';
import { loadCategories } from '../../actions/categories';
import { loadItemStatuses } from '../../actions/itemStatuses';
import ItemList from '../../components/ItemList';
import SingleItem from '../../components/SingleItem.js';
import filterAllItems from '../../lib/filterAllItems';
import { editHelper } from '../../lib/editItem';
import { clearLocal } from '../../lib/editItem';
import Select from '../../components/Select';
import SingleItemView from '../SingleItemView';

class AllItemView extends Component {
  constructor(){
    super();

        this.state = {
          item: '',
          category: '',
          auth: localStorage.auth,
          edit: false
        }
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.closeEdit = this.closeEdit.bind(this);
  }

  handleChangeCategory(event){
    this.setState({
      category: event.target.value
    })
  }

  editNow(item,e){
    let editedItem = editHelper(e);
    this.setState({item: item});
    this.setState({edit: true});
    if(this.state.edit){
      console.log(item);
      editedItem.id = item[0].id;
      this.props.editItem(editedItem);
      this.setState({item: null});
      this.setState({edit: false});
    }
    clearLocal();
  }

  closeEdit(event){
    this.setState({
      item: null,
      edit: false
    });
  }

  componentWillMount(){
    this.props.loadItems();
    this.props.loadCategories();
    this.props.loadConditions();
    this.props.loadItemStatuses();
  }

  loadSingleItem(id,e){
    this.setState({
      item: filterAllItems(this.props.items,id)
    });
  }

  backToItems(e){
    e.preventDefault();
    this.setState({item: null});
    this.setState({edit: false});
  }

  componentDidUpdate(){
    this.fetch
  }


  render(){
    const item = this.state.item;

    let filteredItems = this.props.items.filter(
      (filteredItem) => {
        return (filteredItem.itemcategory.id).toString().indexOf(this.state.category) !== -1;
      }
    );

    let notSoldItems = filteredItems.filter(
      (filteredItem) => {
        return filteredItem.itemstatusId === 2;
      }
    );


      return ( <Redirect to='/items'/>);

  }
}



const mapStateToProps = (state) => {
  return{
    items: state.items,
    categories: state.categories,
    conditions: state.conditions,
    itemStatuses: state.itemStatuses
  }
}

const ConnectedAllItemView = connect(
  mapStateToProps,
  {loadItems, editItem,loadCategories,loadConditions, loadItemStatuses, deleteItem}
)(AllItemView)

export default ConnectedAllItemView;