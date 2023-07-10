﻿namespace LyraeChatApp.Domain.Models.User;

public sealed class CreateUserModel
{
    public string UserName { get; set; }
    public string Email { get; set; }
    public string PhoneNumber { get; set; }
    public string Name { get; set; }
    public string SurName { get; set; }
    public string Photo { get; set; }
    public int DepartmanId { get; set; }
    public DateTime CreatedDate { get; set; } = DateTime.Now;
    public string CreatorName { get; set; } = "Admin";
    public bool IsActive { get; set; } = true;

}
