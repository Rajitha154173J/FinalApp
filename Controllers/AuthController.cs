using System.Threading;
using System.Threading.Tasks;
using Google.Apis.Auth.OAuth2;
using Google.Apis.Oauth2.v2;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FinalApp.Controllers
{ 
    [Route("api/[Controller]")]
    public class AuthController : Controller
    {
        public AuthController ()
        {
            
        }

        [HttpGet]
        public async Task<IActionResult> GetPermissionAsync(){
            UserCredential  credential = await GoogleWebAuthorizationBroker.AuthorizeAsync(
             new ClientSecrets
                {
                    ClientId = "498910310528-lg39tj3k0176usk4plbgp32pn0nr7ko2.apps.googleusercontent.com",
                    ClientSecret = "KXCv3eLDzcvrBKEzBG7TkIzA"
                },
            new [] { Oauth2Service.Scope.UserinfoProfile,Oauth2Service.Scope.UserinfoEmail },"user",
            CancellationToken.None );



            return Ok(
                new {
                    acess_token = credential.Token.AccessToken,
                    id_token = credential.Token.IdToken,
                    expire_token = credential.Token.ExpiresInSeconds
                }
            );
        }

        [HttpGet("[action]")]
        [Authorize]
        public IActionResult UserDetail(){
            return Ok ("user get daetail");
        }
    }
}