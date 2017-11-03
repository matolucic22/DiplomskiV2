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
        public MappingProfile()
        {      
            //Domain to View
            CreateMap<KorisnikDomainModel, KorisnikViewModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-Domain
            CreateMap<KorisnikDomainModel, IKorisnikDomainModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-View
            CreateMap<IKorisnikDomainModel, KorisnikViewModel>().PreserveReferences().ReverseMap().PreserveReferences();


            //Domain to View
            CreateMap<PredmetiDomainModel, PredmetiViewModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-Domain
            CreateMap<PredmetiDomainModel, IPredmetiDomainModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-View
            CreateMap<IPredmetiDomainModel, PredmetiViewModel>().PreserveReferences().ReverseMap().PreserveReferences();


            //Domain to View
            CreateMap<OcjeneDomanModel, OcjeneViewModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-Domain
            CreateMap<OcjeneDomanModel, IOcjeneDomainModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-View
            CreateMap<IOcjeneDomainModel, OcjeneViewModel>().PreserveReferences().ReverseMap().PreserveReferences();


            //Domain to View
            CreateMap<KvizDomainModel, KvizViewModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-Domain
            CreateMap<KvizDomainModel, IKvizDomainModel>().PreserveReferences().ReverseMap().PreserveReferences();
            //Interface(Domain)-View
            CreateMap<IKvizDomainModel, KvizViewModel>().PreserveReferences().ReverseMap().PreserveReferences();
        }
    }
}