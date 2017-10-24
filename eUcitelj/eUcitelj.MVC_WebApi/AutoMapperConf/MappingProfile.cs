using AutoMapper;
using eUcitelj.Model;
using eUcitelj.Model.Common;
using eUcitelj.MVC_WebApi.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace eUcitelj.MVC_WebApi.AutoMapperConf
{
    public class MappingProfile:Profile
    {
        protected override void Configure()
        {      
            //Domain to View
            CreateMap<KorisnikDomainModel, KorisnikViewModel>().ReverseMap();
            //Interface(Domain)-Domain
            CreateMap<KorisnikDomainModel, IKorisnikDomainModel>().ReverseMap();
            //Interface(Domain)-View
            CreateMap<IKorisnikDomainModel, KorisnikViewModel>().ReverseMap();


            //Domain to View
            CreateMap<PredmetiDomainModel, PredmetiViewModel>().ReverseMap();
            //Interface(Domain)-Domain
            CreateMap<PredmetiDomainModel, IPredmetiDomainModel>().ReverseMap();
            //Interface(Domain)-View
            CreateMap<IPredmetiDomainModel, PredmetiViewModel>().ReverseMap();


            //Domain to View
            CreateMap<OcjeneDomanModel, OcjeneViewModel>().ReverseMap();
            //Interface(Domain)-Domain
            CreateMap<OcjeneDomanModel, IOcjeneDomainModel>().ReverseMap();
            //Interface(Domain)-View
            CreateMap<IOcjeneDomainModel, OcjeneViewModel>().ReverseMap();


            //Domain to View
            CreateMap<KvizDomainModel, KvizViewModel>().ReverseMap();
            //Interface(Domain)-Domain
            CreateMap<KvizDomainModel, IKvizDomainModel>().ReverseMap();
            //Interface(Domain)-View
            CreateMap<IKvizDomainModel, KvizViewModel>().ReverseMap();
        }
    }
}