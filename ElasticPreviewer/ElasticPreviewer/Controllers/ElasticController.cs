using ElasticPreviewer.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ElasticPreviewer.Controllers
{
    public class ElasticController : ApiController
    {
        public ElasticResultViewModel Post(ElasticSearchViewModel search)
        {
            //do shit
            return new ElasticResultViewModel { Result = "some json" };
        }
    }
}
