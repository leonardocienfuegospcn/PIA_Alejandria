using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using dbc.Models;

namespace dbc.Controllers
{
    public class LibrosController : ApiController
    {
      public HttpResponseMessage Get()
    {
      string query = @"
                    execute dbo.getLibros
                  ";
      DataTable table = new DataTable();
      using(var con = new SqlConnection(ConfigurationManager.
        ConnectionStrings["BibliotecaAppDB"].ConnectionString))
        using(var cmd = new SqlCommand(query, con))
        using(var da = new SqlDataAdapter(cmd))
      {
        cmd.CommandType = CommandType.Text;
        da.Fill(table);
      }
      return Request.CreateResponse(HttpStatusCode.OK, table);
    }
    public string Post(libros var)
    {
      try
      {
        string query = @"
                    execute dbo.agregarLibro "+var.isbn+@", '"+var.titulo+@"', '"+var.genero+@"', "+var.stock+@", "+var.idAutor+@", "+var.idEditorial+@"
                  ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["BibliotecaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Registrado exitosamente";
      }
      catch(Exception)
      {
        return "Error al registrar";
      }
    }

    public string Put(libros var)
    {
      try
      {
        string query = @"
                    execute dbo.editarLibro " + var.isbn + @", '" + var.titulo + @"', '" + var.genero + @"', " + var.stock + @", " + var.idAutor + @", " + var.idEditorial + @"
                  ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["BibliotecaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Actualizado exitosamente";
      }
      catch (Exception)
      {
        return "Error al actualizar";
      }
    }

    public string Delete(int id)
    {
      try
      {
        string query = @"
                    execute dbo.eliminarLibro " + id + @"  
                  ";
        DataTable table = new DataTable();
        using (var con = new SqlConnection(ConfigurationManager.
          ConnectionStrings["BibliotecaAppDB"].ConnectionString))
        using (var cmd = new SqlCommand(query, con))
        using (var da = new SqlDataAdapter(cmd))
        {
          cmd.CommandType = CommandType.Text;
          da.Fill(table);
        }
        return "Actualizado exitosamente";
      }
      catch (Exception)
      {
        return "Error al actualizar ";
      }
    }

  }
}
