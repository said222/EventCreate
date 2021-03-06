import React, {Component} from 'react';
import { Redirect } from 'react-router';
import {getResults} from "../../../../../js/services";
import axios from 'axios'
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CCollapse,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFade,
  CForm,
  CFormGroup,
  CFormText,
  CValidFeedback,
  CInvalidFeedback,
  CTextarea,
  CInput,
  CInputFile,
  CInputCheckbox,
  CInputRadio,
  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,
  CDropdown,
  CInputGroupText,
  CLabel,
  CSelect,
  CRow,

} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {Link} from "react-router-dom";
import event01 from "../../../../../../public/assets/img/event-01.jpg";

export default class Step3 extends Component
{
  constructor(props){
    super(props);
    this.state={
      artists: [],
      guitarists: [],
      drumsplayers: [],
      organisateur: [],
      vocals: [],
      bassists: [],
      keyboardplayers: [],
      title: '',
      place: '',
      status: false,
      description: '',
      date: '',
      categories: '',
      categoryID: '',
      tags  : '',
      images  : '',
      showMessage: false,
      redirect: false,
      roles: ["lead singer","lead guitarist","drums player","backing vocal","bassist","keyboard player"],

    }

    this.continue=this.continue.bind(this);
    this.back=this.back.bind(this);
  }

  componentDidMount() {

    const singer=this.state.roles[0]
    const guitarist=this.state.roles[1]
    const drumsplayer=this.state.roles[2]
    const vocal=this.state.roles[3]
    const bassist=this.state.roles[4]
    const keyboardplayer=this.state.roles[5]

    let organisateur = JSON.parse(localStorage.getItem("appState"));
    console.log("organisateur")
    let idOrg=organisateur.user.id
    console.log(organisateur.user.id)


      const url=process.env.MIX_REACT_APP_ROOT
      getResults(url+'/allUsers/'+idOrg,data=>{
        this.setState({
          organisateur:data,
        })

      })


    //singers
    this.getUsersByRole(singer,"artists")
    //guitarists
    this.getUsersByRole(guitarist,"guitarists")
    //drumsplayer
    this.getUsersByRole(drumsplayer,"drumsplayers")
    //vocal
    this.getUsersByRole(vocal,"vocals")
    //bassist
    this.getUsersByRole(bassist,"bassists")
    //keyboardplayer
    this.getUsersByRole(keyboardplayer,"keyboardplayers")

  }
    getUsersByRole=(role,array)=>{
      const url=process.env.MIX_REACT_APP_ROOT
      getResults(url+'/showUserByRole/'+role,data=>{
        this.setState({
          [array]:data.artists,
        })

      })
    }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const url=process.env.MIX_REACT_APP_ROOT
    const singer=this.state.roles[0]
    const guitarist=this.state.roles[1]
    const drumsplayer=this.state.roles[2]
    const vocal=this.state.roles[3]
    const bassist=this.state.roles[4]
    const keyboardplayer=this.state.roles[5]
    console.log("eeeeee")
    console.log(this.state)
    let artists=this.state.artists
    let guitarists=this.state.guitarists
    let drumsplayers=this.state.drumsplayers
    let vocals=this.state.vocals
    let bassists=this.state.bassists
    let keyboardplayers=this.state.keyboardplayers
    const { values, inputChange } = this.props;
    return(
      <CRow>
        <CCol xs="12" md="12">
          <CCard>
            <CCardHeader>
              Build your Band
              <small> Step 3</small>
            </CCardHeader>
            <CCardBody>
              <CForm action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <input type="hidden" value={values.users}/>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="password-input" className="text-uppercase">{singer}</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <div className="row">

                    {artists.map((artist,i) =>{
                      return(

                        <div key={artist.id} className="col-md-3" data-aos="fade-up" data-aos-delay="100" >

                          {artist.media?
                          <img  className="img-fluid eventImg" src={artist.media.url} style={{width: 200}}/>
                            :
                           <img  className="img-fluid eventImg" src={event01} style={{width: 200}}/>
                          }

                          <div className="p-4 bg-white">
                            <span className="d-block text-secondary small text-uppercase">{artist.name} {artist.last_name}</span>
                            {artist.role?

                                <p>{artist.role.libelle}</p>
                              :
                              null
                            }

                            < CInputRadio  id="singer" name="users"  onChange={inputChange('users')}  value={artist.id} style={{marginLeft:70}}/>
                          </div>
                        </div>

                      )})}
                    </div>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="password-input" className="text-uppercase">{guitarist}</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <div className="row">

                    {guitarists.map((artist,i) =>{
                      return(

                        <div key={artist.id} className="col-md-3" data-aos="fade-up" data-aos-delay="100">

                          {artist.media?
                          <img  className="img-fluid eventImg" src={artist.media.url} style={{width: 200,height: 150}}/>
                            :
                           <img  className="img-fluid eventImg" src={event01} style={{width: 200,height: 150}}/>
                          }

                          <div className="p-4 bg-white">
                            <span className="d-block text-secondary small text-uppercase">{artist.name} {artist.last_name}</span>
                            {artist.role?

                                <p>{artist.role.libelle}</p>
                              :
                              null
                            }

                            < CInputRadio name="users"  onChange={inputChange('users')}  value={artist.id} id="guitarist"  style={{marginLeft:70}}/>
                          </div>
                        </div>

                      )})}
                    </div>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="password-input" className="text-uppercase">{drumsplayer}</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <div className="row">

                    {drumsplayers.map((artist,i) =>{
                      return(

                        <div key={artist.id} className="col-md-3" data-aos="fade-up" data-aos-delay="100">

                          {artist.media?
                          <img  className="img-fluid eventImg" src={artist.media.url} style={{width: 200,height: 150}}/>
                            :
                           <img  className="img-fluid eventImg" src={event01} style={{width: 200,height: 150}}/>
                          }

                          <div className="p-4 bg-white">
                            <span className="d-block text-secondary small text-uppercase">{artist.name} {artist.last_name}</span>
                            {artist.role?

                                <p>{artist.role.libelle}</p>
                              :
                              null
                            }

                            < CInputRadio  id="drumsplayer" name="users"  onChange={inputChange('users')}  value={artist.id}  style={{marginLeft:70}}/>
                          </div>
                        </div>

                      )})}
                    </div>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="password-input" className="text-uppercase">{vocal}</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <div className="row">

                    {vocals.map((artist,i) =>{
                      return(

                        <div key={artist.id} className="col-md-3" data-aos="fade-up" data-aos-delay="100">

                          {artist.media?
                          <img  className="img-fluid eventImg" src={artist.media.url} style={{width: 200,height: 150}}/>
                            :
                           <img  className="img-fluid eventImg" src={event01} style={{width: 200,height: 150}}/>
                          }

                          <div className="p-4 bg-white">
                            <span className="d-block text-secondary small text-uppercase">{artist.name} {artist.last_name}</span>
                            {artist.role?

                                <p>{artist.role.libelle}</p>
                              :
                              null
                            }

                            < CInputRadio  id="vocal"  name="users"  onChange={inputChange('users')}  value={artist.id} style={{marginLeft:70}}/>
                          </div>
                        </div>

                      )})}
                    </div>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="password-input " className="text-uppercase">{bassist}</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <div className="row">

                    {bassists.map((artist,i) =>{
                      return(

                        <div key={artist.id} className="col-md-3" data-aos="fade-up" data-aos-delay="100">

                          {artist.media?
                          <img  className="img-fluid eventImg" src={artist.media.url} style={{width: 200,height: 150}}/>
                            :
                           <img  className="img-fluid eventImg" src={event01} style={{width: 200,height: 150}}/>
                          }

                          <div className="p-4 bg-white">
                            <span className="d-block text-secondary small text-uppercase">{artist.name} {artist.last_name}</span>
                            {artist.role?

                                <p>{artist.role.libelle}</p>
                              :
                              null
                            }
                            < CInputRadio  id="bassist" name="users"  onChange={inputChange('users')}  value={artist.id}  style={{marginLeft:70}}/>

                          </div>
                        </div>

                      )})}
                    </div>
                  </CCol>
                </CFormGroup>
                <CFormGroup row>
                  <CCol xs="12" md="2">
                    <CLabel htmlFor="password-input" className="text-uppercase">{keyboardplayer}</CLabel>
                  </CCol>
                  <CCol xs="12" md="10">
                    <div className="row">

                      {keyboardplayers.map((pl,i) =>{
                        return(

                          <div key={pl.id} className="col-md-3" data-aos="fade-up" data-aos-delay="100">

                            {pl.media?
                              <img  className="img-fluid eventImg" src={pl.media.url} style={{width: 200,height: 150}}/>
                              :
                              <img  className="img-fluid eventImg" src={event01} style={{width: 200,height: 150}}/>
                            }

                            <div className="p-4 bg-white">
                              <span className="d-block text-secondary small text-uppercase">{pl.name} {pl.last_name}</span>
                              {pl.role?

                                <p>{pl.role.libelle}</p>
                                :
                                null
                              }

                              < CInputRadio  id="keyboardplayers" name="users"  onChange={inputChange('users')}  value={pl.id}  style={{marginLeft:70}}/>
                            </div>
                          </div>

                        )})}
                    </div>
                  </CCol>
                </CFormGroup>



              </CForm>
            </CCardBody>
            <CCardFooter>

              <div className="row">
                <div className="col-6">
                  <button className="btn btn-danger" onClick={this.back}>Back</button>
                </div>
                <div className="col-6 text-right">
                  <button className="btn btn-primary" onClick={this.continue}>Continue</button>
                </div>
              </div>
            </CCardFooter>
          </CCard>

        </CCol>
      </CRow>
    );
  }
}
