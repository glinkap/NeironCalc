import * as actions from './actions';

/*Контейнер будет отвечать за подключение компонента к миру Redux, */


/*
/src/components - «глупые» React-компоненты, несвязанные с Redux
Глупые компоненты получают данные от родителя через пропсы и могут хранить локальный стейт.

/src/containers - «умные» React-компоненты, подключаемые к Redux-стору
Правило: умные компоненты должны обращаться к состоянию только с помощью селекторов.
Правило: вся логика представления в умных компонентах должна выноситься в глупые.

Селектор — это чистая функция, принимающая в качестве аргумента глобальный стейт и возвращающая его в преобразованном виде. Селекторы тесно связаны с редюсерами и расположены внутри reducer.js. Селекторы позволяют нам провести некоторые расчеты по данным, прежде чем данные попадут в представление. В будущем мы воспользуемся этим приёмом. Каждый раз, когда нам необходимо получить часть стейта (например в mapStateToProps), мы должны использовать селекторы.
Почему? Идея состоит в том, чтобы инкапсулировать внутренний стейт приложения и скрыть его от представления. Представьте, что позже мы решили изменить внутреннюю структуру. Без селекторов нам пришлось бы вносить изменения в каждый компонент представления, что нежелательно. 
Использование селекторов позволит проводить рефакторинг, изменяя только редьюсер.

/src/services - некоторые абстракции для внешнего API (например, для бекенда)

Несколько слов о сервисах
Как уже отмечалось ранее, сервисы используются для работы с внешним API, в большинстве случаев с сервер-API, как API Reddit. Плюс от использования сервисов в том, что наш код становится более независимым от изменений API. Если в будущем Reddit решит что-то изменить (конечную точку, названия полей), то эти изменения затронут только наши сервисы, а не всё приложение целиком.
Правило: cервисы должны быть stateless (то есть не должны иметь состояния).

/src/store - весь специфичный для Redux код находится здесь, включая всю бизнес-логику нашего приложения

Правило: вся бизнес-логика должна находиться внутри обработчиков событий (санков), селекторов и редюсеров.


Сайд-эффекты — это когда вы изменяете глобальную переменную, делаете запрос на сервер, пишете что-то в лог.


Единственный случай использования для bindActionCreators 
- это когда вы хотите передать некоторые генераторы действий (action creators)
 вниз к компоненту, который ничего не знает о Redux и вы не хотите передавать ему 
 dispatch или Redux стор.


*/

export function selectTopic(topicUrl) {
  return (dispatch, getState) => {
    const selectedTopics = topicsSelectors.getSelectedTopicUrls(getState());
    if (_.indexOf(selectedTopics, topicUrl) !== -1) return;
    const newSelectedTopics = selectedTopics.length < 3 ?
      selectedTopics.concat(topicUrl) :
      selectedTopics.slice(1).concat(topicUrl);
    dispatch({ type: types.TOPICS_SELECTED, selectedTopicUrls: newSelectedTopics  });
  };
}


import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';

export function fetchTopics() {
  return async(dispatch, getState) => {
    try {
      const subredditArray = await redditService.getDefaultSubreddits();
      const topicsByUrl = _.keyBy(subredditArray, (subreddit) => subreddit.url);
      dispatch({ type: types.TOPICS_FETCHED, topicsByUrl });
    } catch (error) {
      console.error(error);
    }
  };
}



import React, { Component } from 'react';
import { connect } from 'react-redux';
import './TopicsScreen.css';
import * as topicsActions from '../store/topics/actions';
import * as topicsSelectors from '../store/topics/reducer';
import ListView from '../components/ListView';
import ListRow from '../components/ListRow';

class TopicsScreen extends Component {

  componentDidMount() {
    this.props.dispatch(topicsActions.fetchTopics());
  }

  render() {
    if (!this.props.rowsById) return this.renderLoading();
    return (
      <div className="TopicsScreen">
        <ListView
          rowsIdArray={this.props.rowsIdArray}
          rowsById={this.props.rowsById}
          renderRow={this.renderRow.bind(this)} />
      </div>
    );
  }

  renderLoading() {
    return (
      <p>Loading...</p>
    );
  }

  renderRow(rowId, row) {
    const selected = this.props.selectedIdsMap[rowId];
    return (
      <ListRow
        rowId={rowId}
        onClick={this.onRowClick.bind(this)}
        selected={selected}>
        <h3>{row.title}</h3>
        <p>{row.description}</p>
      </ListRow>
    )
  }

  onRowClick(rowId) {
    this.props.dispatch(topicsActions.selectTopic(rowId));
  }

}

// which props do we want to inject, given the global store state?
function mapStateToProps(state) {
  return {
    rowsById: topicsSelectors.getTopicsByUrl(state),
    rowsIdArray: topicsSelectors.getTopicsUrlArray(state),
    selectedIdsMap: topicsSelectors.getSelectedTopicUrlsMap(state)
  };
}

export default connect(mapStateToProps)(TopicsScreen);









class ClickButton extends React.Component {
            
           constructor(props) {
               super(props);
               this.state = {class: "off", label: "Нажми"};
                
               this.press = this.press.bind(this);
                
               console.log("constructor");
           }
           componentWillReceiveProps(nextProps) {
               console.log("componentWillReceiveProps()");
           }
           componentWillMount(){
               console.log("componentWillMount()");
           }
           componentDidMount(){
               console.log("componentDidMount()");
           }
           componentWillUnmount(){
               console.log("componentWillUnmount()");
           }
           shouldComponentUpdate(){
               console.log("shouldComponentUpdate()");
               return true;
           }
           componentWillUpdate(){
               console.log("componentWillUpdate()");
           }
           componentDidUpdate(){
               console.log("componentDidUpdate()");
           }
           press(){
               var className = (this.state.class==="off")?"on":"off";
               this.setState({class: className});
           }
           render() {
               console.log("render()");
               return <button onClick={this.press} className={this.state.class}>{this.state.label}</button>;
           }
       }




// Из документации функции connect, нам так же становится ясно, что 
// с помощью этой функции мы можем не только подписаться на обновления 
// данных, но и "прокинуть" наши actions в контейнер.




// Примечание по fetch
// Мы используем fetch API в примерах. Это новое API для создания сетевых запросов, 
// которое заменяет XMLHttpRequest в большинстве стандартных случаев.
 // Поскольку большинство браузеров до сих пор не поддерживают его нативно, 
 // мы полагаем, что вы для этого используетеisomorphic-fetch библиотеку:

// Добавьте это в каждый файл, где вы используете fetch

import fetch from 'isomorphic-fetch'




/*Примечание: В Redux всегда вызываются все редьюсеры независимо от того какое 
действие было отправлено, поэтому внутри каждого из них нужно возвращать оригинал 
состояния, если не действие не применяется.

*/

export function addComment(postId, message) {
  return {
    types: ['ADD_COMMENT_REQUEST', 'ADD_COMMENT_SUCCESS', 'ADD_COMMENT_FAILURE'],
    callAPI: () => fetch(`http://myapi.com/posts/${postId}/comments`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message })
    }),
    payload: { postId, message }
  }
}