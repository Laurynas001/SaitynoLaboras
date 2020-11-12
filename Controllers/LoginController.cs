using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Net.Http.Headers;
using System.Security.Claims;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using SaitynoLaboras.Authentication_Authorization;
using SaitynoLaboras.Data;
using SaitynoLaboras.DTOs.User;
using SaitynoLaboras.Models;

namespace SaitynoLaboras.Controllers
{
[ApiController]
[Route("[controller]")]
public class LoginController : ControllerBase
    {
        //private readonly IConfiguration _config;
        //private readonly IMapper _mapper;
        private readonly IUserRepository _repository;
        private readonly ITokenService _tokenService;

        public LoginController(IUserRepository repository, ITokenService tokenService)
        {
            //_config = config;
            //_mapper = mapper;
            _repository = repository;
            _tokenService = tokenService;
        }
        [HttpPost]
        [AllowAnonymous]
        public IActionResult Login(UserLoginDTO login)
        {
            if (login == null)
            {
                return BadRequest("Invalid client request");
            }
            User user = _repository.GetUserByLogin(login);
            if (user == null)
            {
                return Unauthorized();
            }
            var claims = new List<Claim>
        {
            new Claim(ClaimTypes.Name, user.Username),
            new Claim(ClaimTypes.Role, user.Role),
            new Claim(ClaimTypes.Email, user.Email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };
            for (int i = 0; i < claims.Count; i++)
            {
                Console.WriteLine(claims[i]);
            }
            var accessToken = _tokenService.GenerateAccessToken(claims);
            var refreshToken = _tokenService.GenerateRefreshToken();
            user.RefreshToken = refreshToken;
            user.RefreshTokenExpiryDate = DateTime.Now.AddDays(7);
            _repository.PatchUser(user.Id, user);
            return Ok(new
            {
                AccessToken = accessToken,
                RefreshToken = refreshToken,
                User = user
            });
        }
    }
}