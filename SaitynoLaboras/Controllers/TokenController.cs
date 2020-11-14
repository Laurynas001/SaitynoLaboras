using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Schema;
using SaitynoLaboras.Authentication_Authorization;
using SaitynoLaboras.Data;
using SaitynoLaboras.DTOs.Price;
using SaitynoLaboras.DTOs.User;
using SaitynoLaboras.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SaitynoLaboras.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly ITokenService _tokenService;
        private readonly IUserRepository _repository;

        public TokenController(ITokenService tokenService, IUserRepository repository)
        {
            _repository = repository;
            _tokenService = tokenService;
        }

        [AllowAnonymous]
        [HttpPost]
        public IActionResult Refresh(Token token)
        {
            if (token.AccessToken == null || token.RefreshToken == null)
            {
                return BadRequest();
            }
            var principal = _tokenService.GetPrincipalFromExpiredToken(token.AccessToken);
            var username = principal.Identity.Name;
            UserLoginDTO userLogin = new UserLoginDTO();
            userLogin.Username = username;
            var user = _repository.GetUserByLogin(userLogin);
            if (user == null || user.RefreshToken != token.RefreshToken || user.RefreshTokenExpiryDate <= DateTime.Now)
            {
                return BadRequest();
            }
            var newAccessToken = _tokenService.GenerateAccessToken(principal.Claims);
            var newRefreshToken = _tokenService.GenerateRefreshToken();
            user.RefreshToken = newRefreshToken;
            _repository.PatchUser(user.Id, user);
            return new ObjectResult(new
            {
                accessToken = newAccessToken,
                refreshToken = newRefreshToken,
                user = user
            });
        }
    }
}
