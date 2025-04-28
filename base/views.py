from django.shortcuts import render, redirect
from .models import Account
from django.contrib import messages
from django.contrib.auth.hashers import make_password

def hero(request):
    return render(request, 'base/landing.html')

def login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')
        if email and password:
            try:
                account = Account.objects.get(email=email)
                from django.contrib.auth.hashers import check_password
                if check_password(password, account.password):
                    return redirect('home')
                messages.error(request, 'Account does not exist.')
                return redirect('hero')
            except Account.DoesNotExist:
                messages.error(request, 'Account does not exist.')
                return redirect('hero')
        messages.error(request, 'Please fill in all fields.')
        return redirect('hero')
    return redirect('hero')

def register(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        date = request.POST.get('date')
        # Save to Account model
        if username and email and password and date:
            # Check for duplicate email
            if Account.objects.filter(email=email).exists():
                messages.error(request, 'An account with this email already exists.')
                return redirect('hero')
            hashed_password = make_password(password)
            Account.objects.create(username=username, email=email, password=hashed_password, date=date)
            messages.success(request, 'Registration successful!')
            return redirect('hero')
        else:
            messages.error(request, 'Please fill in all fields.')
            return redirect('hero')
    return redirect('hero')

def form(request):
    return render(request, 'base/form.html')

def home(request):
    accounts = Account.objects.all()
    return render(request, 'base/home.html', {'accounts': accounts})
