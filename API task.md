
Please build a small Express REST API for managing internship applications.

Feel free to ask clarifying questions if something in the requirements is unclear.

However, this is intended to be completed independently, so I won’t be able to provide step-by-step technical guidance.
### Requirements

Use:

Typescript
Node
Express 
Some database, use SQL
tests - Jest

### Models

**Candidate**

- full_name
    
- email
    
- phone
    
- years_of_experience
    
- primary_skill
    
- created_at
    

**Application**

- candidate (FK)
    
- position
    
- status: applied / screening / interview / rejected / accepted
    
- source
    
- applied_at
    

**InterviewNote**

- application (FK)
    
- note
    
- rating (1–5)
    
- created_at
    

### Endpoints

- `POST /api/candidates/`
    
- `GET /api/candidates/`
    
- `POST /api/applications/`
    
- `GET /api/applications/`
    
- `GET /api/applications/?status=interview`
    
- `POST /api/applications/<id>/notes/`
    
- `GET /api/applications/<id>/notes/`
    
- `GET /api/summary/`
    

### Validation

- candidate email must be unique
    
- rating must be between 1 and 5
    
- application status must be restricted to the allowed values
    
- return appropriate HTTP status codes and error messages
    

### Tests

Please include tests for:

- creating a candidate
    
- duplicate email rejection
    
- creating an application
    
- filtering applications by status
    
- creating an interview note
    
- summary endpoint
    

### README

Please include:

- setup instructions
    
- how to run the project
    
- how to run tests
    
- endpoint list
    
- assumptions
    
- brief explanation of design choices
    

### Submission

Please send:

- GitHub repo link or zip file
    
- short note saying what is complete and what is incomplete