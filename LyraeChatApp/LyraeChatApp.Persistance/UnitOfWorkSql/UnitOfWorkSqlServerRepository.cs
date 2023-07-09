﻿using LyraeChatApp.Domain.Models;
using LyraeChatApp.Domain.Repositories.App.UserRepositories;
using LyraeChatApp.Domain.UnitOfWork;
using LyraeChatApp.Persistance.Repositories.AppDb.UserRepository;
using System.Data.SqlClient;

namespace LyraeChatApp.Persistance.UnitOfWorkSql;

public class UnitOfWorkSqlServerRepository : IUnitOfWorkRepository
{
    public IUserCommandRepository userCommandRepository { get; }

    public IUserQueryRepository userQueryRepository { get; }

    public UnitOfWorkSqlServerRepository(SqlConnection context, SqlTransaction transaction)
    {
        userCommandRepository = new UserCommandRepository(context, transaction);
        userQueryRepository =  new UserQueryRepository(context, transaction);
    }
}