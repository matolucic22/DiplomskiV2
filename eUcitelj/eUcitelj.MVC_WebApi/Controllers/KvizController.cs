using AutoMapper;
using eUcitelj.Model.Common;
using eUcitelj.MVC_WebApi.ViewModels;
using eUcitelj.Service.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace eUcitelj.MVC_WebApi.Controllers
{
    [RoutePrefix("api/Kviz")]
    public class KvizController : ApiController
    {
        protected IKvizService KvizService { get; set; }
        public KvizController(IKvizService kvizService)
        {
            this.KvizService = kvizService;
        }

        [HttpGet]
        [Route("getAllK")]
        public async Task<HttpResponseMessage> GetAllKviz()
        {
            try
            {
                var response = Mapper.Map<IEnumerable<KvizViewModel>>(await KvizService.GetAll());
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpGet]
        [Route("getK")]
        public async Task<HttpResponseMessage> GetKviz(Guid Id)
        {
            try
            {
                var response = Mapper.Map<KvizViewModel>(await KvizService.Get(Id));
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        [HttpPost]
        [Route("addK")]
        public async Task<HttpResponseMessage> AddKviz(KvizViewModel addObj)//httpresponsemessage - convert to HTTP convert message
        {
            try
            {
                addObj.KvizId = Guid.NewGuid();
                var response = await KvizService.Add(Mapper.Map<IKvizDomainModel>((addObj)));
                return Request.CreateResponse(HttpStatusCode.OK, response);

            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }

        //[HttpPut]
        //[Route("updateK")]
        //public async Task<HttpResponseMessage> UpdateKviz(KvizViewModel updateK)
        //{
        //    try
        //    {

        //        KorisnikViewModel toBeUpdated = Mapper.Map<KorisnikViewModel>(await KorisnikService.Get(updateK.KorisnikId));

        //        if (toBeUpdated == null)
        //        {
        //            return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Nije pronađen trazeni korisnik.");
        //        }
        //        if (updateK.Ime_korisnika == null || updateK.Korisnicko_ime == null || updateK.KorisnikId == null || updateK.Password == null || updateK.Potvrda == null || updateK.Prezime_korisnika == null || updateK.Role == null)
        //        {
        //            return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, "Greska u unosu!");
        //        }
        //        else
        //        {
        //            toBeUpdated.KorisnikId = updateK.KorisnikId;
        //            toBeUpdated.Ime_korisnika = updateK.Ime_korisnika;
        //            toBeUpdated.Prezime_korisnika = updateK.Prezime_korisnika;
        //            toBeUpdated.Korisnicko_ime = updateK.Korisnicko_ime;
        //            toBeUpdated.KorisnikId = updateK.KorisnikId;
        //            toBeUpdated.Password = updateK.Password;
        //            toBeUpdated.Potvrda = updateK.Potvrda;
        //            toBeUpdated.Role = updateK.Role;
        //        }
        //        var response = await KorisnikService.Update(Mapper.Map<IKorisnikDomainModel>(toBeUpdated));
        //        return Request.CreateResponse(HttpStatusCode.OK, response);

        //    }
        //    catch (Exception e)
        //    {
        //        return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
        //    }
        //}

        [HttpDelete]
        [Route("deleteK")]
        public async Task<HttpResponseMessage> DeleteKviz(Guid Id)
        {
            try
            {
                var response = await KvizService.Delete(Id);
                return Request.CreateResponse(HttpStatusCode.OK, response);
            }
            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.InternalServerError, e);
            }
        }
    }
}
